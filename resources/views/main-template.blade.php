<!-- Load JS Libs -->
<script src="{{ asset('js/libs/sweetalert2.js')}}"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.1/jquery.min.js"></script>

<!-- Load Config -->
<script type="text/javascript" src="{{ asset('js/config/config-prod.js') }}"></script>

<!-- Load Header -->
<script type="text/javascript" src="{{ asset('js/header.js') }}"></script>
@include('layouts.header')

<!-- Load JS From Template Name -->
<script>
  let script = document.createElement('script');
  script.src = "{{ asset('js/templates/'.$templates.'.js') }}";
  document.head.append(script);
  script.onerror = function() {
    alert("Error loading " + this.src);
  };
</script>

<!-- Load View From Template Name -->
<body style="background: white; font-family: sans-serif; margin-bottom:80px">
    @include('templates.'.$templates)
</body>