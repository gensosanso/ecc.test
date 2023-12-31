<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('subthemes', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('theme_id');

            $table->foreign('theme_id')->references('id')->on('themes')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('subthemes');
    }
};
