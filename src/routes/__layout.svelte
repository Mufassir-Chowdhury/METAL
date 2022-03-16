<script>
	import '../app.css';
</script>

<div class="w-screen h-20 flex px-10 border-b border-black items-center justify-between">
	<div class="flex space-x-6 items-center">
		<a href="/research">
			<div>Research</div>
		</a>
		<a href="/publications">
			<div>Publications</div>
		</a>
	</div>			
	<div class="font-bold text-2xl">
		<a href="/">METAL</a>
	</div>
	<div class="flex space-x-6 items-center">
		<a href="/">
			<div>About METAL</div>
		</a>
		<a href="/people">
			<div>People</div>
		</a>
		<a href="/teams">
			<div>Teams</div>
		</a>
		<a href="/contact">
			<div>Contact</div>
		</a>
	</div>
</div>
<main>
	<slot />
</main>

<footer class="p-8 w-full justify-center flex">
	@2022 METAL LABORATORY <span class="mx-2">|</span> <a href="https://sust.edu/"> SUST</a>
</footer>
