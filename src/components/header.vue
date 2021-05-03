<template>
    <header>
        <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">
            <div class="container">
                <router-link to="/" class="navbar-brand float-left">CRUD</router-link>
                <ul class="nav navbar-nav flex-row float-right">

                    <li class="nav-item">
                        <router-link class="nav-link pr-3" to="/">Home</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link pr-3" to="/create">Create</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link pr-3" to="/view">Views</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>