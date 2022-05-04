/* eslint-disable */

<script>
import axios from "axios";
import jsPDF from "jspdf";

export default {
  el: '#app',
  created: function () {
    axios.get(`/students/5.json`)
      .then(response => {
        console.log(response.data)
        this.student = response.data
        // this.htmlToPdf()
      });
  },
  data() {
    return {
      student: {
        first_name: "Brian",
        last_name: "Rice",
        email: "brice@actualize.co",
        phone_number: "555-5555",
        linkedin_url: 'linkedin.com/in/riceb',
        twitter_handle: '@riceb',
        github_url: 'github.com/riceb',
        short_bio: "This is a guy that has done some things, probably.",
        experiences: [
          { start_date: "12/24/21", end_date: "03/01/22", job_title: "Teacher", company_name: "A School Maybe", details: "Did some stuff. Did some other things. Taught some stuff." },
          { start_date: "12/24/19", end_date: "03/01/21", job_title: "Assistant Teacher", company_name: "A School Maybe", details: "Helped teach some things, did some other stuff." }
        ],
        educations: [
          { start_date: "04/02/1997", end_date: "05/17/2001", degree: "Teaching Certificate", university_name: "UC Berkeley", details: "Majored in a subject with a minor in some other subject" }
        ],
        skills: [
          { skill: "Ruby" },
          { skill: "JavaScript" },
          { skill: "teaching" },
          { skill: "web development" }
        ],
        capstone: {
          name: "Friends and Family",
          description: "An app to locate your friends and family on the map. Keep track of them. All of them. Watch where they go. You can never be too careful.",
          url: "/example.html"
        }
      }
    }
  },
  methods: {
    htmlToPdf: function () {
      var doc = new jsPDF({
        orientation: 'p',
        unit: 'in',
        format: 'letter',
        putOnlyUsedFonts: true,
        floatPrecision: 16 // or "smart", default is 16
      })

      doc.html(this.$refs["data"], {
        margin: [0.25, 0.5, 0.25, 0.5],
        width: 7.5,
        windowWidth: 720,
        autoPaging: 'text',
        callback: () => {
          doc.save(`${this.student.first_name}-${this.student.last_name}-resume.pdf`)
        }
      });
      console.log(this.student.skills)
    }
  }
};
</script>

<template>
  <div id="data" ref="data">
    <h1>{{ student.first_name }} {{ student.last_name }}</h1>
    <p>{{ student.email }} | {{ student.phone_number }} | {{ student.linkedin_url }} | {{ student.github_url }} | {{
        student.twitter_handle
    }}</p>
    <hr>
    <p>{{ student.short_bio }}</p>
    <h2>Skills</h2>
    <span v-for="skill in student.skills">{{ skill.skill }}<span v-if="skill != this.student.skills">, </span></span>
    <h2>Capstone Project</h2>

    <h3>{{ student.capstone.name }}</h3>
    <p>{{ student.capstone.url }}</p>
    <p>{{ student.capstone.description }}</p>

    <h2>Education</h2>
    <div v-for="education in student.educations">
      <h3>{{ education.university_name }}</h3>
      <h4>{{ education.degree }}</h4>
      <h5>{{ education.start_date }} - {{ education.end_date }}</h5>
      <p>{{ education.details }}</p>
    </div>
    <h2>Experience</h2>
    <div v-for="experience in student.experiences">
      <h3>{{ experience.company }}</h3>
      <h4>{{ experience.job_title }}</h4>
      <h5>{{ experience.start_date }} - {{ experience.end_date }}</h5>
      <p>{{ experience.details }}</p>
    </div>
  </div>
  <button v-on:click="htmlToPdf">Download File As PDF</button>
</template>

<style>
body {
  font-family: sans-serif;
}
</style>
