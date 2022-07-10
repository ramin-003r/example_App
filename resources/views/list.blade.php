@foreach($todos as $todo)
{{$todo->title}}|{{$todo->description}}|<a href="/delete/{{$todo->id}}">delete it!</a> <br/>
@endforeach
