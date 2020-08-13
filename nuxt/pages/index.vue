<template>
  <div class="container">
    <header>
      <Logo />
      <h1 class="title">
        {{ render.page.seoTitle }}
      </h1>
    </header>

    <h2>Containers</h2>
    <ul
      v-for="container of render.containers"
      v-bind:key="container.identifier"
    >
      <li>
        <h3>{{ container.container.name }}</h3>
        <ul v-for="(contentlet, i) in container.contentlets" v-bind:key="i">
          <li v-for="data of contentlet" v-bind:key="data.inode">
            <b>{{ data.contentType }}:</b> {{ data.title }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { initDotCMS } from 'dotcms'
import { DotCMSPageAsset, DotCMSPage } from 'dotcms/lib/models'

const api = initDotCMS({
  host: 'https://demo.dotcms.com',
  /*
    This token is for DEMO purpouses in prodction use enviromental variables

    To get a new token, just run:

    curl -k -H "Content-Type:application/json"  -X POST -d  '{ "user":"admin@dotcms.com", "password":"admin", "expirationDays": 10 }' https://demo.dotcms.com/api/v1/authentication/api-token
  */
  token:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhcGk5ZGRlOWI3Ni1iNTZlLTRlNDMtOGQ3MC0yYTg0NDNlYTJkMmIiLCJ4bW9kIjoxNTk2OTQ1ODY4MDAwLCJuYmYiOjE1OTY5NDU4NjgsImlzcyI6ImZkN2RkZDZmZTgiLCJleHAiOjE1OTc4MDk4NjgsImlhdCI6MTU5Njk0NTg2OCwianRpIjoiMDAwNDQzOWItZmUyYy00YTc2LThlMTUtMDdjM2RjMjczZWQzIn0.sCLWfGrNz7PUJ8oUyw0_T21vBGskuWBK8hGPzBfOMm0',
})

export type Nullable<T> = T | null

export default Vue.extend({
  data() {
    return {
      render: {} as DotCMSPageAsset,
    }
  },
  async fetch() {
    this.render = await api.page.get({
      url: '/',
    })
  },
  head(): { title: string } {
    return {
      title: `DotCMS | ${this.render.page.title}`,
    }
  },
})
</script>

<style>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
.container {
  margin: 2rem;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 3rem;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
