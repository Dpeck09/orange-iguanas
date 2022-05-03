/* eslint-disable */

<script>
import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
// import dompurify from "dompurify";
// import $ from "jquery";
export default {
  el: '#app',
  data() {
    return {
      message: 'Hi my first vue code pen!!!'
    }
  },
  methods: {
    //jspdf does not include the bootstrap style layout
    htmlToPdf: function () {
      var doc = new jsPDF();
      doc.html(document.getElementById("data"),
        {
          callback: function (doc) {
            doc.save("example.pdf");
          }
        }
      )
    }
  }
};
</script>

<template>
  <div id="data">
    <h1>This is a demo of converting HTML to PDF</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum saepe, nihil ipsa ab rem, natus atque odio vero
      ea voluptatum vitae repellendus eligendi commodi eius officiis eaque molestias sint! Et?</p>

  </div>
  <button v-on:click="htmlToPdf">Download File As PDF</button>
</template>

<style>
</style>