<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class SubscriptionController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'plan_type' => 'required|in:Free,Basic,Premium',
            'billing_information' => 'nullable|string',
            'subscription_start_date' => 'required|date',
            'subscription_end_date' => 'required|date',
            'renewal_status' => 'required|in:Auto-renew,Manual',
            'payment_history' => 'nullable|string',
            'invoice_id' => 'nullable|integer',
            'status' => 'required|in:Active,Expired,Canceled',
        ]);

        $subscription = Subscription::create($request->all());

        return response()->json($subscription, 201);
    }

    public function index()
    {
        $subscriptions = Subscription::orderBy('created_at', 'desc')->get();

        return response()->json($subscriptions);
    }

    public function show($id)
    {
        $subscription = Subscription::findOrFail($id);

        return response()->json($subscription);
    }

    public function update(Request $request, $id)
    {
        $subscription = Subscription::findOrFail($id);

        $request->validate([
            'status' => 'nullable|in:Active,Expired,Canceled',
            // Other validation rules as needed
        ]);

        $subscription->update($request->only(['status', 'payment_history']));

        return response()->json($subscription);
    }

    public function destroy($id)
    {
        $subscription = Subscription::findOrFail($id);
        $subscription->delete();

        return response()->json(null, 204);
    }

    public function pay(Request $request, $id)
    {
        $subscription = Subscription::findOrFail($id);

        // Use Razorpay API to create a payment
        $response = Http::withHeaders([
            'Authorization' => 'Basic ' . base64_encode(env('RAZORPAY_KEY_ID') . ':' . env('RAZORPAY_KEY_SECRET')),
        ])->post('https://api.razorpay.com/v1/orders', [
            'amount' => 1000, // Amount in paise
            'currency' => 'INR',
            'receipt' => 'receipt_' . $id,
        ]);

        $order = $response->json();

        return response()->json($order);
    }
}
