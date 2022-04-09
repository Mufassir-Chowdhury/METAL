<script>
	import '../app.css';
	let menu = false;
	function handleClick() {
		menu = !menu;
	}

</script>

<div class="w-screen h-20 flex font-light px-10 border-b border-black items-center justify-between">
	<div class="hidden md:flex space-x-6 items-center">
		<a href="/research">
			<div>Research</div>
		</a>
		<a href="/publications">
			<div>Publications</div>
		</a>
	</div>			
	<div class="font-bold text-2xl text-center">
		<a href="/">NMOSS</a>
		<div class="font-normal text-sm"><span class="font-bold">N</span>etworking, <span class="font-bold">M</span>icroarchitectural, <span class="font-bold">O</span>perating system <span class="font-bold">S</span>ecurity research group @ <span class="font-bold">S</span>UST</div>
	</div>
	<div class="hidden md:flex space-x-6 items-center">
		<a href="/">
			<div>About NMOSS</div>
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
	<button class="md:hidden" on:click={handleClick}>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
		</svg>
	</button>
</div>
{#if menu }
	<button class="w-full flex items-center" on:click={handleClick}>
		<div class="w-full flex flex-col items-center text-center py-2">
	
			<a href="/research">
				<div class="py-2">Research</div>
			</a>
			<a href="/publications">
				<div class="py-2">Publications</div>
			</a>
			<a href="/">
				<div class="py-2">About NMOSS</div>
			</a>
			<a href="/people">
				<div class="py-2">People</div>
			</a>
			<a href="/teams">
				<div class="py-2">Teams</div>
			</a>
			<a href="/contact">
				<div class="py-2">Contact</div>
			</a>
		</div>
	</button>
{ /if }
<main>
	<slot />
</main>

<footer class="p-8 w-full justify-center flex">
	@2022 NMOSS Research Group
</footer>
