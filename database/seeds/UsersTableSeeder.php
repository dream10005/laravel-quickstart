<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		DB::table('simpleapi')->insert([
		'id' => '1',
		'name' => 'hello world']);
    }
}
