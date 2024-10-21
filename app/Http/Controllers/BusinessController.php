<?php

namespace App\Http\Controllers;

use App\Models\Business;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Helpers\GeocodingHelper;
use Illuminate\Support\Facades\Auth;

class BusinessController extends Controller
{
    
    public function index()
    {
        $businesses = Business::all();
        return response()->json($businesses);
    }

   
    public function show($id)
    {
        $business =Business::with('reviews.users')->find($id);   
      
        if ($business) {
            return response()->json(["data"=>$business]);
        } else {
            return response()->json(['message' => 'Business not found'], 404);
        }
    }

   
    public function store(Request $request)
    {
      
        $Business = $request->validate([
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
            'business_profile' => 'image|mimes:jpeg,png,jpg,gif',
        ]);

        if ($request->hasFile('business_profile')) {
            $file = $request->file('business_profile');
            // Generate a new filename with the current timestamp and original extension
            $originalname = $file->getClientOriginalName();
            $fileoriginalname = explode('.', $originalname)[0]; // Filename 'filename'
            $timestamp = $fileoriginalname.time(); // Current timestamp
            $extension = $file->getClientOriginalExtension(); // Get the original extension
            $filename = "banner_{$timestamp}.{$extension}"; // New filename

            // Store the file using the new filename
            // $path = $file->storeAs('business_profile/business_banners', $filename, 'public'); // Store in public/images
            
             // Define the public path for saving the image
            $path = public_path('Business_images'); // Get the path to the public directory

            // Move the uploaded file to the desired location
            $file->move($path, $filename);
            $Business['business_profile'] = $filename;
        }

        $Business['business_id'] = "BS".str::random(6);        
        //'12.9509006','80.1784284'
        // $address = '9, 1st Main Rd, Raghava Nagar, St.Thomas Mount-cum-Pallavaram, Madipakkam, Tamil Nadu 600091';
        $co_ordinates = GeocodingHelper::getCoordinates($Business['address']);
        $Business['latitude'] = $co_ordinates['latitude'];
        $Business['longitude'] = $co_ordinates['longitude'];
        // $getlatlon = GeocodingHelper::getPlaceDetails( $Business['latitude'], $Business['longitude']);
        $business = Business::create($Business);
        if($business){
            return response()->json(['message'=>'Business Created Successfully', 'status'=>200]);
        }else{
            return response()->json(['message'=>'Something went wrong on business creation.', 'status'=>401]);
        }
    }

  
    public function update(Request $request, $id)
    {
        $business = Business::find($id);
        if ($business) {
            $request->validate([
                'business_id' => 'required|string|max:255',
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
            ]);

            $business->update($request->all());
            return response()->json($business);
        } else {
            return response()->json(['message' => 'Business not found'], 404);
        }
    }

    
    public function destroy($id)
    {
        $business = Business::find($id);
        if ($business) {
            $business->delete();
            return response()->json(['message' => 'Business deleted']);
        } else {
            return response()->json(['message' => 'Business not found'], 404);
        }
    }

    public function displayLocation(Request $request){
        return view('getcurrentlocation');
    }

   public function getRelatedBusiness(Request $request){
        $latitude = $request->input('latitude');
        $longitude = $request->input('longitude');

        $business = GeocodingHelper::findNearbyUsers( $latitude, $longitude);
       return response()->json(['message' => $business]);
   }


   public function searchSuggestions(Request $request, $id){
        $business_list = Business::select('id','business_id','business_name')->where('business_name','like','%'.$id.'%')->get();
        return response()->json(['message'=> $business_list]);
   }


    public function login(Request $request){      
        $validatedData = $request->validate([
            'email' => 'required',
            'password' => 'required'            
        ]);
        
        $user = User::where('email' , $request->email)->first();
        if (Auth::attempt($request->only($validatedData['email'], $validatedData['password']))) {
            dd("loggedin", $user->id);
            Auth::loginUsingId($user->id);
            return redirect('/');
        }
       
    }
   

}
