<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Voter;
use Illuminate\Http\Request;

class VoterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Voter::query();

        if ($search = $request->search) {
            $query->whereAny(
                [
                    'name',
                    'phone',
                    'address',
                ],
                'LIKE',
                "%$search%"
            );
        }
        if ($stay = $request->stay) {
            $query->whereStayInPosition($stay);
        }

        $voters = $query->paginate(2);

        return response()->json($voters);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $voter = Voter::create($request->all());
        return response()->json(['message' => 'Voter saved successfully', 'voter' => $voter], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $voter = Voter::find($id);

        if ($voter) {
            return response()->json($voter, 200);
        } else {
            return response()->json(['message' => 'Voter not found'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $voter = Voter::find($id);

        if ($voter) {
            $voter->update($request->all());
            return response()->json(['message' => 'Voter updated successfully', 'voter' => $voter], 200);
        } else {
            return response()->json(['message' => 'Voter not found'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $voter = Voter::find($id);

        if ($voter) {
            $voter->delete();
            return response()->json(['message' => 'Voter deleted successfully'], 200);
        } else {
            return response()->json(['message' => 'Voter not found'], 404);
        }
    }
}
