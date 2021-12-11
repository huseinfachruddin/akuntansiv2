<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AkunRole extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('akun_role', function (Blueprint $table) {
            $table->id();
            $table->biginteger('akun_id')->unsigned();
            $table->biginteger('role_id')->unsigned();
            $table->timestamps();
            $table->foreign('akun_id')->references('id')->on('akuns')->onDelete('cascade');
            $table->foreign('role_id')->references('id')->on('roles')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('akun_role');
    }
}
