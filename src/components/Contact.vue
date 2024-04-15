<template>
  <v-container fluid class="contact-section">
    <p class="section-title">Get in Touch</p>
    <p class="section-description">Feel free to reach out by filling out the form below. I'll get back to you as soon as possible!</p>
    
    <v-form ref="form" style="height: 70vh">
      <v-card class="contact-card" elevation="15" @mouseenter="isHovering = true" @mouseleave="isHovering = false" @touchstart="isTouched = true" @touchend="isTouched = false" :class="{ 'hovered': isHovering || isTouched }">
        <v-card-title class="contact-card__title">Contact Form</v-card-title>
        <v-card-text>
          <v-text-field v-model="name" :rules="nameRules" variant="outlined" placeholder="Your Name" label="Name"></v-text-field>
          <v-text-field v-model="email" :rules="emailRules" variant="outlined" placeholder="Your Email" label="Email"></v-text-field>
          <v-textarea v-model="message" :rules="messageRules" variant="outlined" placeholder="Your Message" label="Message"></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn size="large" variant="contained" :loading="loading" :disabled="loading" color="primary" @click="submit()">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
    <v-snackbar v-model="snackbar" color="success">{{ form_message }}</v-snackbar>
    <v-snackbar v-model="snackbar" color="error">{{ form_message }}</v-snackbar>

    <!-- footer Section -->
      <v-container fluid class="bg-black">
     <!-- Social Icons Section -->
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="4" class="social-links">
          <p class="font-weight-bold text-h6 my-6">Social</p>
          <div>
            <v-btn class="social-icon" href="https://github.com/sixto-tumulak" target="_blank" color="black" dense>
              <v-icon size="30">mdi-github</v-icon>
            </v-btn>

            <v-btn class="social-icon" href="https://www.facebook.com/sixto.tumulak.5" target="_blank" color="black" dense>
              <v-icon size="30">mdi-facebook</v-icon>
            </v-btn>

            <v-btn class="social-icon" href="https://www.instagram.com/sixto_tumulak/" target="_blank" color="black" dense>
              <v-icon size="30">mdi-instagram</v-icon>
            </v-btn>

            <v-btn class="social-icon" href="https://open.spotify.com/sixto21" target="_blank" color="black" dense>
              <v-icon size="30">mdi-spotify</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
      
      
      <v-divider class="my-6" />
      
      <p class="text-center text-caption">© 2024 Sixto B. Tumulak III</p>
    </v-container>
  </v-container>
  </v-container>
  
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)
const snackbar = ref(false)
const form_message = ref('')
const form = ref()

const name = ref('')
const email = ref('')
const message = ref('')
const isHovering = ref(false)
const isTouched = ref(false)

async function submit() {
  const { valid } = await form.value.validate()

  if (valid) {
    try {
      loading.value = true
      const docRef = await addDoc(collection(db, "contacts"), {
        name: name.value,
        email: email.value,
        message: message.value
      })
      loading.value = false
      form_message.value = "Message sent. Thanks for contacting me!"
      snackbar.value = true
    } catch (e) {
      loading.value = false
      form_message.value = "Sorry, something went wrong.."
      snackbar.value = true
    }
  }
}

const nameRules = ref([
  v => !!v || 'Name is required',
  v => (v && v.length <= 10) || 'Name must be less than 10 characters',
])

const messageRules = ref([
  v => !!v || 'Message is required',
  v => (v && v.length >= 10) || 'Message must be more than 10 characters',
])

const emailRules = ref([
  value => {
    if (value) return true
    return 'E-mail is required.'
  },
  value => {
    if (/.+@.+\..+/.test(value)) return true

    return 'E-mail must be valid.'
  },
])
</script>

<style scoped>
.contact-section {
  background-color: #f5f5f5;
  padding: 50px 0;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
}

.section-description {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 30px;
}

.contact-card {
  margin: auto;
  max-width: 500px;
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.hovered {
  transform: translateY(-5px); /* Move card 5px up when hovered */
  background-color: #3ab5ff; /* Change background color to blue */
}

.contact-card__title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.contact-card__btn {
  font-weight: bold;
}

/* Adjustments for text field colors */
.v-text-field--outlined .v-input__control {
  border-color: #ccc;
}

.v-text-field--outlined .v-label {
  color: #333;
}

/* Adjustments for snackbar */
.v-snack__content {
  color: #fff;
}

/* Adjustments for snackbar colors */
.v-snack__wrapper--success .v-snack__content {
  background-color: #4caf50;
}

.v-snack__wrapper--error .v-snack__content {
  background-color: #f44336;
}
.social-icon:hover .v-icon {
  color: blue; /* Change the icon color on hover */
  background-color: black; /* Add background color to the icon container on hover */
}
</style>
