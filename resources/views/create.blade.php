@extends('layouts.index')

@section('content')
    <form action="{{ route('todo.makeAPI') }}" method="post">
        @csrf
        <input placeholder="title" name="title" />

        <input placeholder="description" name="description" />

        <input type="submit" value="Make!" />
    </form>
@endsection
