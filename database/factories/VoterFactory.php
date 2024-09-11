<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Voter>
 */
class VoterFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name,
            'phone' => $this->faker->randomDigit(),
//            'image' => $this->faker->image(public_path('images'),400,300, null, false),
            'address' => $this->faker->sentence,
            'stay_in_position' => $this->faker->randomElement([0,1]),
            'created_at' => now(),
            'updated_at' => now(),
            'password' => Hash::make('password'),
        ];
    }
}
