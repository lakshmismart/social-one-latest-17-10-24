<?php

namespace App\Http\Controllers;

use App\Models\Advertisement;
use Illuminate\Http\Request;

class AdvertisementController extends Controller
{
    // Display a listing of advertisements
    public function index()
    {
        $advertisements = Advertisement::all();
        return response()->json($advertisements);
    }

    // Display a specific advertisement by ID
    public function show($id)
    {
        $advertisement = Advertisement::find($id);
        if ($advertisement) {
            return response()->json($advertisement);
        } else {
            return response()->json(['message' => 'Advertisement not found'], 404);
        }
    }

    // Create a new advertisement
    public function store(Request $request)
    {
        $request->validate([
            'business_id' => 'nullable|integer',
            'ad_title' => 'nullable|string|max:255',
            'ad_content' => 'nullable|string',
            'target_audience' => 'nullable|string',
            'budget' => 'nullable|numeric',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date',
            'ad_status' => 'nullable|in:Active,Paused,Ended',
            'performance_metrics' => 'nullable|string',
        ]);

        $advertisement = Advertisement::create($request->all());
        return response()->json($advertisement, 201);
    }

    // Update an existing advertisement
    public function update(Request $request, $id)
    {
        $advertisement = Advertisement::find($id);
        if ($advertisement) {
            $request->validate([
                'business_id' => 'nullable|integer',
                'ad_title' => 'nullable|string|max:255',
                'ad_content' => 'nullable|string',
                'target_audience' => 'nullable|string',
                'budget' => 'nullable|numeric',
                'start_date' => 'nullable|date',
                'end_date' => 'nullable|date',
                'ad_status' => 'nullable|in:Active,Paused,Ended',
                'performance_metrics' => 'nullable|string',
            ]);

            $advertisement->update($request->all());
            return response()->json($advertisement);
        } else {
            return response()->json(['message' => 'Advertisement not found'], 404);
        }
    }

    // Delete an advertisement by ID
    public function destroy($id)
    {
        $advertisement = Advertisement::find($id);
        if ($advertisement) {
            $advertisement->delete();
            return response()->json(['message' => 'Advertisement deleted']);
        } else {
            return response()->json(['message' => 'Advertisement not found'], 404);
        }
    }
}
