<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\CandidateResource;
use App\Models\Candidate;
use Illuminate\Http\Request;

class CandidateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Candidate::query();

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
        if ($symbol = $request->symbol) {
            $query->whereSymbolId($symbol);
        }

        $candidates = $query->paginate(2);
//        return UserResource::collection(
//            User::query()->orderBy('id','desc')->get()
//        );

        return CandidateResource::collection($candidates);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $candidate = Candidate::create($request->all());
        return response()->json(['message' => 'Candidate saved successfully', 'candidate' => $candidate], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $candidate = Candidate::with('symbol')->find($id);

        if ($candidate) {
            return new CandidateResource($candidate);
        } else {
            return response()->json(['message' => 'Candidate not found'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $candidate = Candidate::find($id);

        if ($candidate) {
            $candidate->update($request->all());
            return response()->json(['message' => 'Candidate updated successfully', 'candidate' => $candidate], 200);
        } else {
            return response()->json(['message' => 'Candidate not found'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $candidate = Candidate::find($id);

        if ($candidate) {
            $candidate->delete();
            return response()->json(['message' => 'Candidate deleted successfully'], 200);
        } else {
            return response()->json(['message' => 'Candidate not found'], 404);
        }
    }
}
