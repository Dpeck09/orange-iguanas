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
      message: 'Hi my first vue code pen!!!',
      experiences: [
        { "job_title": "Assistant", "company_name": "Microsoft", "details": "did something, did something else, did another thing" },
        { "job_title": "Manager", "company_name": "Apple", "details": "did something, did something else, did another thing" }]
    }
  },
  methods: {
    htmlToPdf: function () {
      var doc = new jsPDF('p', 'pt', 'A4')

      // From Javascript
      // var finalY = doc.lastAutoTable.finalY || 10
      // doc.text('From javascript arrays', 14, finalY + 15)
      // var body = this.experiences
      // doc.autoTable({
      //   startY: finalY + 20,
      //   body: body,
      // })
      console.log(this.$refs["data"])
      doc.html(this.$refs["data"], {
        margin: [50, 50, 50, 50],
        callback: function () {
          doc.save('example.pdf')
        }
      });


    }
  }
};
</script>

<template>
  <div id="data" ref="data">
    <h1>Here's a heading 1</h1>
    <h2>Here's a heading 2</h2>
    <p>Here is some paragraph text.</p>
  </div>

  <button v-on:click="htmlToPdf">Download File As PDF</button>
</template>

<style>
</style>
