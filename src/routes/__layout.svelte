<script>
	import '../app.css';
	import Modal from '../lib/Modal.svelte';
    import { page } from '$app/stores';
	export const router = false;
	let param = $page.url.pathname;
	let menu = false;
	function handleClick() {
		menu = !menu;
	}
	
	let showModal = false;
	function handleToggleModal() {
	  showModal = !showModal
	}
	let showProjectsModal = false;
	function handleToggleProjectsModal(){
		showProjectsModal = !showProjectsModal
	}
	let showPublicationsModal = false;
	function handleTogglePublicationsModal(){
		showPublicationsModal = !showPublicationsModal
	}
</script>

<div class="w-screen h-20 flex font-light px-6 lg:px-10 border-b border-black items-center justify-between">
	<div class="hidden md:flex space-x-6 items-center h-full">
		<button class="h-full px-4" on:click={() => handleToggleProjectsModal()}>Projects</button>
		<Modal title="Coming Soon!" open={showProjectsModal} on:close={() => handleToggleProjectsModal()}>
			<svelte:fragment slot="body">
				Work in progress...
			</svelte:fragment>
		</Modal>
		<button class="h-full px-4" on:click={() => handleTogglePublicationsModal()}>Publications</button>
		<Modal title="Coming Soon!" open={showPublicationsModal} on:close={() => handleTogglePublicationsModal()}>
			<svelte:fragment slot="body">
				Work in progress...
			</svelte:fragment>
		</Modal>
	</div>			
	<div class="font-bold lg:text-2xl text-center">
		<a href="/">NMOSS</a>
		<div class="font-normal text-xs lg:text-sm"><span class="font-bold">N</span>etworking, <span class="font-bold">M</span>icroarchitectural, <span class="font-bold">O</span>perating System <span class="font-bold">S</span>ecurity Research Group @ <span class="font-bold">S</span>UST</div>
	</div>
	<div class="hidden md:flex items-center h-full">
		<div class="h-full px-4 flex items-center">
			<a href="/">
				About NMOSS
			</a>
		</div>
		<div class:bg-gray-300={param==='/people'} class="h-full px-4 flex items-center">
			<a href="/people">
				People
			</a>
		</div>
		<div class:bg-gray-300={param==='/teams'} class="h-full px-4 flex items-center">
			<a href="/teams">
				Teams
			</a>
		</div>
		<div class="font-light h-full px-4 flex items-center">
			<button on:click={() => handleToggleModal()}>Contact</button>
			<Modal title="Contact us!" open={showModal} on:close={() => handleToggleModal()}>
				<svelte:fragment slot="body">
					If you’re interested in our work and want to collaborate with us feel free to email us at - <a href="mailto:irfannafizislive@gmail.com" class="text-blue-400">irfannafizislive@gmail.com</a>
				</svelte:fragment>
			</Modal>
		</div>
	</div>
	<button class="md:hidden" on:click={handleClick}>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
		</svg>
	</button>
</div>
{#if menu }
<div class="w-full flex flex-col items-center text-center py-2">

		<button class="w-full flex flex-col items-center" on:click={handleClick}>
			<a href="/">
				<div class="py-2">About NMOSS</div>
			</a>
			<a href="/people">
				<div class="py-2">People</div>
			</a>
			<a href="/teams">
				<div class="py-2">Teams</div>
			</a>
		</button>
		<button class="h-full py-2" on:click={handleToggleProjectsModal}>Projects</button>
		<Modal title="Coming Soon!" open={showProjectsModal} on:close={() => handleToggleProjectsModal()}>
			<svelte:fragment slot="body">
				Work in progress...
			</svelte:fragment>
		</Modal>
		<button class="h-full py-2" on:click={handleTogglePublicationsModal}>Publications</button>
		<Modal title="Coming Soon!" open={showPublicationsModal} on:close={() => handleTogglePublicationsModal()}>
			<svelte:fragment slot="body">
				Work in progress...
			</svelte:fragment>
		</Modal>
		<div class="font-light">
			<button class="py-2" on:click={handleToggleModal}>Contact</button>
			<Modal title="Contact us!" open={showModal} on:close={handleToggleModal}>
				<svelte:fragment slot="body">
					If you’re interested in our work and want to collaborate with us feel free to email us at - <a href="mailto:irfannafizislive@gmail.com" class="text-blue-400">irfannafizislive@gmail.com</a>
				</svelte:fragment>
			</Modal>
		</div>
</div>
{ /if }
<main>
	<slot />
</main>

<footer class="p-8 w-full justify-center flex">
	@2022 NMOSS Independent Research Group
</footer>
