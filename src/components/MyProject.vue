<template>
  <v-card elevation="8" class="my-10">
    <v-row>
      <v-col cols="12" md="7" sm="12">
        <v-tooltip text="Click me to see screenshots" location="top">
          <template v-slot:activator="{ props }">
            <v-img height="400" v-bind="props" :src="project.image[0]" @click="dialog = true">
              <template v-slot:placeholder>
                <div class="d-flex align-center justify-center fill-height">
                  <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                </div>
              </template>
            </v-img>
          </template>
        </v-tooltip>
      </v-col>
      <v-col cols="12" md="5" sm="12">
        <v-card-item>
          <p class="text-h5 font-weight-bold">{{ project.name }}</p>
          <p class="my-6">{{ project.description }}</p>
          <p class="text-h5 font-weight-bold title">Tools Used:</p>
          <br>
          <v-btn href="#" target="_blank" size="" variant="lat" rounded="" density="">
          <v-chip label class="mx-2 mb-2 pa-5" v-for="tool in project.tools_used" :key="tool">{{ tool }}</v-chip>
          </v-btn>
        </v-card-item>
      </v-col>
    </v-row>
  </v-card>

  <v-dialog v-model="dialog">
    <v-row>
      <v-spacer/>
      <v-btn icon="mdi-close" @click="dialog = false"></v-btn>
    </v-row>
    <v-carousel show-arrows="hover" hide-delimiter-background>
      <v-carousel-item v-for="image in project.image" :key="image" :src="image"></v-carousel-item>
    </v-carousel>
  </v-dialog>



</template>

<script setup>
  import { ref } from 'vue'
  defineProps({ project: Object })

  const dialog = ref(false)
  const show_details = ref(false)
</script>

<style scoped>

    .v-btn:hover {
        color: #3ab5ff;
    }

    p:hover {
        color: #3ab5ff;
        cursor: pointer;
    }

    .v-avatar {
        cursor: pointer;
    }

</style>

