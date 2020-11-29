<template>
  <v-expansion-panels class="mt-0 mb-6">
    <v-expansion-panel>
      <v-expansion-panel-header>
        <b class="teal--text">View Post Guidelines</b>
        <template v-slot:actions>
          <v-icon color="teal darken-4"> mdi-eye </v-icon>
        </template>
      </v-expansion-panel-header>
      <v-divider></v-divider>
      <v-expansion-panel-content class="pt-3">
        <ul class="guidelines">
          <li>Brochure image width should always be 1080px in width only.</li>
          <li>
            Suggested height for brochure image is 1080px or 1350px, it is ok to
            extend the height.
          </li>
          <li>
            Brochure image should be attractive,consice and have only relevant
            information, detailed information regarding the
            {{ serviceType }} should be included in the Brochure PDF.
          </li>
          <li>
            The post title & description can be written in plain text or HTML,
            ie. HTML tags like :-
            <ul>
              <li>&lt;br&gt; - Break Tags</li>
              <li>
                &lt;ul&gt;, &lt;ol&gt;, &lt;li&gt; - Ordered & Unordered List
                elements
              </li>
              <li>
                &lt;b&gt;, &lt;i&gt; - Text Modifiers like bold and italics
              </li>
              <li>any other suitable HTML tags can be used.</li>
            </ul>
          </li>
          <li>
            It is suggested to add class name
            <span class="red--text">"ma-3"</span> for &lt;ul&gt; or &lt;ol&gt;
            tags and <span class="red--text">"my-2"</span> for &lt;li&gt; tags,
            ex: <span class="red--text">&lt;ul class="ma-3"&gt;</span>
          </li>
          <li>
            Color can be added to description text by adding class name
            <span class="red--text">"color--text"</span> where "color" is the
            desired color you want, <br />
            ex :
            <span class="green--text"
              >&lt;span class="green--text"&gt;This is an example for green
              text&lt;/span&gt;</span
            >
          </li>
          <v-divider class="my-5"></v-divider>
          <li>
            Padding and margin can be added by using this formula
            <span class="red--text mr-2">{property}{direction}-{size}</span>as a
            class name
            <ul>
              <li>
                <b class="red--text">property</b> can be :-
                <ul>
                  <li><b>m</b> - applies margin</li>
                  <li><b>p</b> - applies padding</li>
                </ul>
              </li>
              <li>
                <b class="red--text">direction</b> can be :-
                <ul>
                  <li>
                    <b>t</b> - applies the spacing for margin-top and
                    padding-top
                  </li>
                  <li>
                    <b>b</b> - applies the spacing for margin-bottom and
                    padding-bottom
                  </li>
                  <li>
                    <b>l</b> - applies the spacing for margin-left and
                    padding-left
                  </li>
                  <li>
                    <b>r</b> - applies the spacing for margin-right and
                    padding-right
                  </li>
                  <li>
                    <b>x</b> - applies the spacing for both *-left and *-right
                  </li>
                  <li>
                    <b>y</b> - applies the spacing for both *-top and *-bottom
                  </li>
                  <li>
                    <b>a</b> - applies the spacing for the property in all
                    directions
                  </li>
                </ul>
              </li>
              <li><b class="red--text">size</b> is 1 to 16</li>
            </ul>
          </li>
        </ul>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  props: {
    serviceType: String,
  },
};
</script>

<style lang="scss" scoped>
.guidelines {
  li {
    margin: 0.8rem 0;
  }
}
</style>