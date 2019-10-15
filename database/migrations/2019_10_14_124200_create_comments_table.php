<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('content');

            $table->unsignedBigInteger('author_id')->unique();
            $table->foreign('author_id')->references('id')->on('users');

            $table->unsignedBigInteger('post_id')->unique();
            $table->foreign('post_id')->references('id')->on('posts');

            $table->unsignedBigInteger('comment_id')->unique()->nullable();
            $table->foreign('comment_id')->references('id')->on('comments')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comments');
    }
}
