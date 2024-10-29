<?php

namespace App\Http\Controllers;

use App\Models\Business;
use App\Models\User;
use Illuminate\Http\Request;
use App\Helpers\GeocodingHelper;
use Illuminate\Support\Facades\Auth;
use App\Interface\BusinessRepositoryInterface;
use App\Interface\UserRepositoryInterface;

class BusinessController extends Controller
{
    protected $businessRepository;
    protected $userRepository;

    public function __construct(BusinessRepositoryInterface $businessRepository,  UserRepositoryInterface $userRepository)
    {
        $this->businessRepository = $businessRepository;
        $this->userRepository = $userRepository;
    }

    public function index()
    {
        try {
            $businesses = $this->businessRepository->getAllBusinesses();
            return response()->json($businesses);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to retrieve businesses', 'message' => $e->getMessage()], 500);
        }
    }

    public function show($id)
    {
        try {
            $business = $this->businessRepository->getBusinessById($id);
            if ($business) {
                return response()->json(['data'=>$business]);
            } else {
                return response()->json(['message' => 'Business not found', 'status' => 404], 404);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to retrieve the business', 'message' => $e->getMessage()], 500);
        }
    }

    public function store(Request $request)
    {
        try {

            $data = $request->validate([
                'user_id' => 'nullable|integer',
                'business_name' => 'required|string|max:255',
                'business_description' => 'nullable|string',
                'business_category' => 'nullable|string|max:255',
                'address' => 'nullable|string|max:255',
                'city' => 'nullable|string|max:100',
                'state' => 'nullable|string|max:100',
                'postal_code' => 'nullable|string|max:20',
                'country' => 'nullable|string|max:100',
                'contact_email' => 'nullable|email|max:255',
                'contact_phone' => 'nullable|string|max:20',
                'website_url' => 'nullable|string|max:255',
                'social_media_links' => 'nullable|string',
                'business_hours' => 'nullable|string',
                'logo_url' => 'nullable|string|max:255',
                'verification_status' => 'nullable|in:Pending,Verified,Rejected',
                'business_profile' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);

            $business = $this->businessRepository->createBusiness($data);

            if ($business) {
                return response()->json(['message' => 'Business Created Successfully', 'status' => 200]);
            } else {

                return response()->json(['error' => 'Failed to create business', 'message' => 'Business creation failed due to an unknown error.'], 500);
            }
        } catch (\Illuminate\Validation\ValidationException $e) {

            return response()->json(['error' => 'Validation Error', 'message' => $e->getMessage()], 422);
        } catch (\Exception $e) {

            return response()->json(['error' => 'Failed to create business', 'message' => $e->getMessage()], 500);
        }
    }



    public function update(Request $request, $id)
    {
        try {
            $data = $request->validate([
                'business_name' => 'required|string|max:255',
                'business_description' => 'nullable|string',
                'business_category' => 'nullable|string|max:255',
                'address' => 'nullable|string|max:255',
                'city' => 'nullable|string|max:100',
                'state' => 'nullable|string|max:100',
                'postal_code' => 'nullable|string|max:20',
                'country' => 'nullable|string|max:100',
                'contact_email' => 'nullable|email|max:255',
                'contact_phone' => 'nullable|string|max:20',
                'website_url' => 'nullable|string|max:255',
                'social_media_links' => 'nullable|string',
                'business_hours' => 'nullable|string',
                'logo_url' => 'nullable|string|max:255',
                'verification_status' => 'nullable|in:Pending,Verified,Rejected',
            ]);

            $business = $this->businessRepository->updateBusiness($id, $data);
            if ($business) {
                return response()->json($business);
            } else {
                return response()->json(['message' => 'Business not found'], 404);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to update business', 'message' => $e->getMessage()], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $isDeleted = $this->businessRepository->deleteBusiness($id);
            if ($isDeleted) {
                return response()->json(['message' => 'Business deleted successfully']);
            } else {
                return response()->json(['message' => 'Business not found'], 404);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to delete business', 'message' => $e->getMessage()], 500);
        }
    }

    public function displayLocation(Request $request)
    {
        try {
            return view('getcurrentlocation');
        } catch (\Exception $e) {
            return response()->json(['error' => 'Unable to display location', 'message' => $e->getMessage()], 500);
        }
    }

    public function getRelatedBusiness(Request $request)
    {
        try {
            $latitude = $request->input('latitude');
            $longitude = $request->input('longitude');

            if (!$latitude || !$longitude) {
                return response()->json(['error' => 'Latitude and Longitude are required'], 400);
            }

            $business = GeocodingHelper::findNearbyUsers($latitude, $longitude);

            if ($business) {
                return response()->json(['message' => $business]);
            } else {
                return response()->json(['message' => 'No businesses found nearby'], 404);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to retrieve nearby businesses', 'message' => $e->getMessage()], 500);
        }
    }

    public function searchSuggestions(Request $request, $id)
    {
        try {
            if ($id) {
                return response()->json(['error' => 'Search term is required'], 400);
            }
            $business_list = Business::select('id', 'business_id', 'business_name')
                ->where('business_name', 'like', '%' . $id . '%')
                ->get();
            if ($business_list->isEmpty()) {
                return response()->json(['message' => 'No businesses found'], 404);
            } else {
                return response()->json(['message' => $business_list]);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to fetch search suggestions', 'message' => $e->getMessage()], 500);
        }
    }

    public function login(Request $request)
    {
        try {
            // Validate input
            $validatedData = $request->validate([
                'email' => 'required|email',
                'password' => 'required'
            ]);

            // Find the user by email using the repository
            $user = $this->userRepository->findByEmail($request->email);

            if (!$user) {
                return back()->withErrors(['email' => 'No user found with this email']);
            }

            // Attempt to log the user in using the repository
            if ($this->userRepository->attemptLogin($request->only(['email', 'password']))) {
                // Log in the user if authentication succeeds
                Auth::loginUsingId($user->id);
                return redirect('/');
            } else {
                return back()->withErrors(['password' => 'Incorrect password']);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'Login failed', 'message' => $e->getMessage()], 500);
        }
    }
}
