<script lang="ts">
	import mugshot from '$assets/mugshot.jpg'

	const data = [
		{
			name: 'About',
			id: '#about'
		},
		{
			name: 'Experience',
			id: '#experience'
		},
		{
			name: 'Skills',
			id: '#skills'
		},
		{
			name: 'Work',
			id: '#work'
		},
		{
			name: 'Education',
			id: '#education'
		},
		{
			name: 'Contact',
			id: '#contact'
		}
	]
</script>

<header class="fixed top-0 z-10 w-full animate-header bg-blue-500 px-4 py-2">
	<div class="mx-auto flex size-full max-w-2xl justify-between">
		<!-- <ul class="mx-auto flex w-full max-w-2xl justify-between">
		{#each data as item}
			<li><a href={item.id}>{item.name}</a></li>
		{/each}
	</ul> -->

		<div class="mugshot animate-mugshot self-end">
			<img src={mugshot} class="size-full rounded-full" alt="Lee Long Hui's mugshot" />
		</div>
		<div>Drawer</div>
	</div>
</header>

<style>
	header,
	.mugshot {
		animation-timeline: scroll();
		animation-range: 0 150px;
	}
</style>
