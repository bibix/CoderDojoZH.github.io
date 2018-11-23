Vue.component('materials-list', {
    props: ['title', 'papers'],
    template: `
      <div v-if="list.length > 0">
        <h2>{{ title }}</h2>
        <table>
          <tr>
            <th>Preview</th>
            <th>A6 version</th>
            <th>A4 version</th>
          </tr>
          <tr is="paper-item"
            v-for="item in papers"
            v-bind:title="item.title"
            v-bind:previewUrl="item.previewUrl"
            v-bind:linkEn="item.linkEn"
            v-bind:linkDe="item.linkDe"
            v-bind:printInstructions="item.printInstructions"
            class="paper-item"
          >
          </tr>
        </table>
      </div>
      `
    
})

Vue.component('paper-item', {
    props: ['previewUrl', 'linkEn', 'linkDe', 'printInstructions'],
    template: `
    <td><img src=previewUrl/></td>
    <td><a href=linkEn>EN</a>/<a href=linkDe>DE</a></td>
    <td><a href=linkEn>EN</a>/<a href=linkDe>DE</a></td>
    `
})
