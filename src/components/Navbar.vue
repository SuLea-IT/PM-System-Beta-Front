<template>
  <nav class="navbar">
    <div class="navbar-left">
      <span class="navbar-title"
        >Spatial transcriptome database -- Li Bosheng Lab</span
      >
    </div>
    <div class="navbar-center">
      <ul class="navbar-menu">
        <li><a href="#about">About</a></li>
        <li><a href="#analyse">Analyse</a></li>
        <li><a href="#forum">Forum</a></li>
      </ul>
    </div>
    <div class="navbar-right">
      <a href="#english" class="navbar-link">English</a>
      <button class="navbar-button">Light</button>
    </div>
  </nav>
</template>

<script setup>
// 这里可以加入一些你需要的逻辑，比如切换主题的功能
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px 20px;
  font-family: Arial, sans-serif;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-left {
  flex: 1;
}

.navbar-title {
  font-weight: bold;
  font-size: 16px;
}

.navbar-center {
  flex: 1;
  display: flex;
  justify-content: center;
}

.navbar-menu {
  list-style: none;
  display: flex;
  gap: 20px;
}

.navbar-menu li a {
  text-decoration: none;
  color: black;
  font-weight: 500;
}

.navbar-right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
}

.navbar-link {
  text-decoration: none;
  color: black;
}

.navbar-button {
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
}

.navbar-button:hover {
  background-color: #e0e0e0;
}
</style>
