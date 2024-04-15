<template>
  <v-container fluid class="text-center" style="height: 300vh; background-color: #fff;">
    <!-- Education Section -->
    <v-container>
      <p class="text-h3 text-center font-weight-bold mt-10 pb-6 underline">Education</p>
      <v-row>
        <!-- Loop through education history -->
        <v-col v-for="(edu, index) in education" :key="index" md="6" cols="12">
          <v-card class="pa-4 mb-4 custom-card" elevation="10">
            <v-img v-if="edu.image" :src="edu.image" aspect-ratio="1.5" contain class="education-image"></v-img>
            <v-card-title class="text-h5 font-weight-bold">{{ edu.level }}</v-card-title>
            <v-divider class="mx-auto line"></v-divider>
            <v-card-text class="text-body-1">
              <p class="font-weight-bold">{{ edu.name }}</p>
              <p>{{ edu.year }}</p>
              <p>{{ edu.description }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Hobbies Section -->
    <v-container>
      <p class="text-h3 text-center font-weight-bold mt-10 pb-6 underline">Hobbies</p>
      <p class="text-h6 text-center pb-6 ">Things I Enjoy Doing</p>
      <v-row>
        <v-col v-for="(hobby, index) in hobbies" :key="index" md="6" cols="12">
          <v-card class="pa-4 mb-4 custom-card" elevation="10">
            <v-img v-if="hobby.image" :src="hobby.image" aspect-ratio="1.5" contain class="hobbies-image"></v-img>
            <p class="font-weight-bold">{{ hobby.level }}</p>
            <v-card-title class="text-h5 font-weight-bold">{{ hobby.name }}</v-card-title>
            <v-divider class="mx-auto line"></v-divider>
            <v-card-text class="text-body-1">
              
              <p>{{ hobby.description }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
const education = [
  {
    level: 'Gun-ob Elementary School', 
    year: '2011-2012',
    image: '/midterm-project/elementary.png',
    description: 'At Gun-ob Elementary School, we are dedicated to fostering a supportive and engaging learning environment for students of all backgrounds. Our commitment to academic excellence, creativity. and character development.'
  },
  {
    level: 'Gun-ob High School',
    year: '2016-2017',
    image: '/midterm-project/highschool.jpg',
    description: 'Gun-ob High School is committed to providing a challenging and supportive educational environment for students. We focus on academic excellence, creativity, and personal growth to prepare our students for success in their future endeavors.'
  },
  {
    level: 'Senior High School',
    year: '2019-2020',
    image: '/midterm-project/senior.jpg',
    description: 'Gun-ob is a premier educational institution dedicated to the holistic development of its students. With a rich history and commitment to excellence, UST continues to provide quality education and shape future leaders.'
  },
  {
    level: 'College',
    year: '3rd yr undergrad',
    image: '/midterm-project/cordova.png',
    description: 'Cordova Public College is committed to providing quality education and fostering a dynamic learning environment. We strive to empower students with the knowledge and skills needed for success in their chosen fields.'
  }
];

const hobbies = [
  {
    level: 'Coding',
    image: '/midterm-project/coding.jpg',
    description: 'Coding is a passion that captivates me because it serves as a gateway to turning imagination into tangible reality. The thrill of constructing algorithms and crafting intricate lines of code is unparalleled'
  },
  {
    level: 'Coffee',
    image: '/midterm-project/coffee.jpg',
    description: 'Every morning, as the sun gently rises, my day begins with the ritualistic embrace of a freshly brewed cup of coffee. Its comforting warmth envelops me, awakening my senses and setting the tone for the day ahead'
  },
  {
    level: 'Travelling',
    image: '/midterm-project/travel.jpg',
    description: 'Embarking on a journey allows me to explore new cultures, landscapes, and perspectives, enriching my life with unforgettable experiences and widening my understanding of the world.'
  },
  {
    level: 'Swimming',
    image: '/midterm-project/swimming.jpg',
    description: 'I have a deep love for swimming, and its closely tied to my affection or the sea or ocean. Swimming is not just a hobby for me, where every stroke tells a story of freedom and joy. '
  }
];
</script>
<style scoped>
/* Additional styles for the sections */
.line {
  width: 10%;
  height: 2px;
  background: linear-gradient(to right, #3ab5ff, #00c6ff, #0072ff);
  margin: 20px auto;
}

/* Adjusted size for images */
.education-image {
  max-height: 200px; /* Adjust this value as per your requirement */
  object-fit: contain; /* Maintain aspect ratio */
}

/* Set fixed height for hobby images */
.hobbies-image {
  max-height: 300px; /* Adjust this value as per your requirement */
  height: 200px; /* Fixed height */
  object-fit: cover; /* Maintain aspect ratio and cover container */
}

/* Custom card styles */
.custom-card {
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out; /* Apply transition to transform and background-color properties */
  background-color: #fff; /* Default background color */
}

/* Hover effect */
.custom-card:hover {
  transform: translateY(-5px); /* Move card 5px up when hovered */
  background-color: #3ab5ff; /* Change background color to blue */
}

/* Underline effect */
.underline {
  text-decoration: underline;
}
</style>
