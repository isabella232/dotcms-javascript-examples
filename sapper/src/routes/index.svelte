<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch(`index.json`);
    const render = await res.json();

    return { render };
  }
</script>

<script>
  export let render;
</script>

<style>
  header {
    text-align: center;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  ul ul {
    margin-bottom: 1rem;
  }
</style>

<svelte:head>
  <title>DotCMS | {render.page.seoTitle}</title>
</svelte:head>

<header>
  <img alt="DotCMS" src="dotcms-logo.png" width="300" />
  <h1>{render.page.seoTitle}</h1>
</header>

<div class="content">
  <ul>
    {#each Object.entries(render.containers) as [name]}
      <li>
        <h2>{render.containers[name].container.title}</h2>
        <ul>
          {#each Object.entries(render.containers[name].contentlets) as [uuid]}
            {#each render.containers[name].contentlets[uuid] as contentlet}
              <li>
                <b>{contentlet.title}:</b>
                {contentlet.title}
              </li>
            {/each}
          {/each}
        </ul>
      </li>
    {/each}

  </ul>
</div>
