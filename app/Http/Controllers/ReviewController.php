<?php

// app/Http/Controllers/ReviewController.php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'business_id' => 'required|exists:businesses,id',
            'reviewer_user_id' => 'required|exists:users,id',
            'rating' => 'required|integer|between:1,5',
            'review_text' => 'nullable|string',
            'review_title' => 'nullable|string|max:255',
            'photos_or_videos' => 'nullable|string',
            'verification_status' => 'nullable|in:Verified,Unverified',
            'review_status' => 'nullable|in:Published,Pending,Rejected',
            'response_from_business_owner' => 'nullable|string',
        ]);
        dd($request->all());
        $review = Review::create($request->all());

        return response()->json($review, 201);
    }

    public function index()
    {
        $reviews = Review::orderBy('created_at', 'desc')->get();

        return response()->json($reviews);
    }

    public function show($id)
    {
        $review = Review::findOrFail($id);

        return response()->json($review);
    }

    public function update(Request $request, $id)
    {
        $review = Review::findOrFail($id);

        $request->validate([
            'verification_status' => 'nullable|in:Verified,Unverified',
            'review_status' => 'nullable|in:Published,Pending,Rejected',
            'response_from_business_owner' => 'nullable|string',
        ]);

        $review->update($request->only(['verification_status', 'review_status', 'response_from_business_owner']));

        return response()->json($review);
    }

    public function destroy($id)
    {
        $review = Review::findOrFail($id);
        $review->delete();

        return response()->json(null, 204);
    }
}

