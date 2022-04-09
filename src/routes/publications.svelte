<button on:click={() => handleToggleModal()}>Open modal</button><Modal
  title="Contact us!"
  open={showModal}
  on:close={() => handleToggleModal()}
>
  <svelte:fragment slot="body">
    If you’re interested in our work and want to collaborate with us feel free to email us at - <a href="mailto:irfannafizislive@gmail.com" class="text-blue-400">irfannafizislive@gmail.com</a>
  </svelte:fragment>
</Modal><script>
  import Modal from '../lib/Modal.svelte';
  let showModal = false;
  const handleToggleModal = () => {
    showModal = !showModal
  }
</script>