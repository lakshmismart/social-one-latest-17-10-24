<?php

namespace App\Http\Controllers;

use App\Models\BusinessResponse;
use Illuminate\Http\Request;

class BusinessResponseController extends Controller
{
    // Display a listing of business responses
    public function index()
    {
        $responses = BusinessResponse::all();
        return response()->json($responses);
    }

    // Display a specific business response by ID
    public function show($id)
    {
        $response = BusinessResponse::find($id);
        if ($response) {
            return response()->json($response);
        } else {
            return response()->json(['message' => 'Business response not found'], 404);
        }
    }

    // Create a new business response
    public function store(Request $request)
    {
        $request->validate([
            'business_id' => 'nullable|integer',
            'linked_review_id' => 'nullable|integer',
            'response_text' => 'nullable|string',
            'status' => 'nullable|in:Public,Private',
            'response_visibility' => 'nullable|in:Visible to everyone,Visible only to reviewer',
        ]);

        $response = BusinessResponse::create($request->all());
        return response()->json($response, 201);
    }

    // Update an existing business response
    public function update(Request $request, $id)
    {
        $response = BusinessResponse::find($id);
        if ($response) {
            $request->validate([
                'business_id' => 'nullable|integer',
                'linked_review_id' => 'nullable|integer',
                'response_text' => 'nullable|string',
                'status' => 'nullable|in:Public,Private',
                'response_visibility' => 'nullable|in:Visible to everyone,Visible only to reviewer',
            ]);

            $response->update($request->all());
            return response()->json($response);
        } else {
            return response()->json(['message' => 'Business response not found'], 404);
        }
    }

    // Delete a business response by ID
    public function destroy($id)
    {
        $response = BusinessResponse::find($id);
        if ($response) {
            $response->delete();
            return response()->json(['message' => 'Business response deleted']);
        } else {
            return response()->json(['message' => 'Business response not found'], 404);
        }
    }
}
