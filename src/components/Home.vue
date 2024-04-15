<script setup></script>

<template>
    <v-container fluid class="text-center" style="height: 95vh">
        <div id="free-up-space"></div>
        <v-avatar size="200" @click="$emit('navigate', 'home')" v-if="$vuetify.display.width > 400">
            <v-img src="/midterm-project/sixto.jpg"></v-img>
        </v-avatar>
        <div class="line"></div> <!-- Creative line design -->
        <p id="name" :class="['font-weight-bold', 'name', $vuetify.display.smAndDown ? 'text-h4' : 'text-h2']">Welcome! , I'm Sixto Tumulak III</p>
        <v-row justify="center">
            <v-col cols="12" sm="12" md="10"  class="subname font-weight-regular">
                <p>
                    A front-end developer. I love turning designs into websites that people enjoy using. I mainly work with HTML, CSS, and JavaScript to make websites look good and work smoothly.
                    I'm all about making sure websites are easy to use and look great on any device. I enjoy working with teams and always look for ways to improve my skills to make better websites.
                    Let's work together to make the web a better place, one awesome site at a time!
                </p>
                <v-btn variant="flat" size="x-large" class="project-btn font-weight-bold" @click="$emit('navigate', 'projects')" color="green">LEARN MORE! </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
    .v-container {
        background: fff;
    }

    .btns {
        height: 249px;
        position: absolute;
        top: 4%;
        left: 0;
    }

    .name {
        margin-top: 4%;
    }

    .subname, .project-btn {
        margin-top: 3%;
    }

    .v-btn:hover {
        background-color: #4CAF50;
        color: skyblue;
    }

    .line {
        width: 10%;
        height: 2px;
        margin: 20px auto; /* Center horizontally */
        background: linear-gradient(to right, #3ab5ff, #00c6ff, #0072ff);
    }
</style>
