<template>
  <div>
    <vue-particles
      color="#3fb0ef"
      :particleOpacity=".6"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1.3"
      :lineLinked="true"
      :lineOpacity="0.5"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style>
#particles-js {
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>