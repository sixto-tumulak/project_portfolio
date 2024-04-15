<template>
    <v-container fluid class="bg-grey-lighten-4">
        <v-container>
            <div id="free-up-space"></div>
            <p class="text-h3 text-center font-weight-bold">My Projects</p>
            <p class="text-center mt-10">As a student, I've completed several projects that highlight my skills and learning.
             From designing apps to creating websites, each project has been a valuable opportunity for me to grow and showcase my abilities.
             Here some of my project that I have done</p>
            <MyProject v-for="project in projects" :project="project" :key="project.name"/>
        </v-container>
    </v-container>
</template>

<script setup>
    import { ref } from 'vue'
    import MyProject from './MyProject.vue'

    const dialog = ref(false)
    const show_details = ref(false)

    const projects = [
        {
            name: 'Apartment Reservation',
            description: `An Apartment Reservation System is a digital platform designed to facilitate the booking of apartments for temporary stays. It allows users to browse available apartments, select their preferred dates, and complete the booking process online.`,
            image: [
                '/midterm-project/apartment.png',
                '/midterm-project/apartment1.png',
                '/midterm-project/apartment2.png',
                '/midterm-project/apartment3.png',
                '/midterm-project/apartment4.png'
            ],
            tools_used: ['Java', 'PHP', 'MySQL'],
        },
    

        {
            name: 'Personal Portfolio',
            description: `A simple portfolio website project offers a streamlined platform to showcase your work, 
            featuring a passcode-protected login for added security. Ideal for professionals in various fields,
             this website allows you to create a personalized profile, display your portfolio in a gallery, and 
             provide a calculator tool for specific functionalities.
             `,
            image: [
                '/midterm-project/passcode.PNG',
                '/midterm-project/profile1.PNG',
                '/midterm-project/profile2.PNG',
                '/midterm-project/profile3.PNG',
                '/midterm-project/profile4.PNG',
                '/midterm-project/gallery.PNG',
                '/midterm-project/calculator.PNG',
                '/midterm-project/logout.PNG'
            ],
            overview: `Simple weight tracker, made this to learn Firebase.`,
            tools_used: ['  HTML', 'CSS', 'Boostrap', 'Javascript'],
        }
    ]
</script>

<style scoped>
    .outer {
        background: linear-gradient(to bottom, #EEEEEE, #FFFFFF)
    }
</style>
