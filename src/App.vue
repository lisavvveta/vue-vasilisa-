<template>
  <router-view />
</template>

<script>
export default {
  data: {
		counter: 0
	},
	methods: {
		increase: function() {
      this.counter++;
    }
  }
};
</script>


<style lang="scss">
html,
body {
  max-width: 1300px;
  margin: 0;
  padding: 0;
  text-align: center;
  font-family: "Calibri", sans-serif;
  font-size: 16px;
  color: #000;
  text-transform: uppercase;
  background: #fffacd;
  box-sizing: border-box;
}

.content {
  width: auto;
  margin: 0 auto;
  flex-wrap: wrap;
  align-content: center;
  display: flex;
  justify-content: space-around;
}

a {
  text-decoration: none;
  color: #000;
}

section {
  display: flex;
  justify-content: space-between;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
  position: relative;
}

p {
  text-align: left;
}

h1,
h2,
h3 {
  text-align: center;
  margin: auto;
  padding-top: 10px;
}

div {
  margin: 20px;
}

.conteiner {
  display: flex;
  flex-direction: row;
}

.contact_img {
  height: 350px;
  width: 550px;
  padding: 10px;
}

.block {
  display: block;
  justify-content: flex-end;
  position: relative;
  position: 50%;
  float: right;
  position: inherit;
  width: 30%;
}
</style>
