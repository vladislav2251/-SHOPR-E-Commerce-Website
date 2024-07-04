<template>
    <header class="mt-4 w-full">
        <Container>
            <div class="grid grid-cols-3 items-center">
                <Image
                    src="/public/svg/logo.svg"
                    alt="SHOPR logo icon"
                />

                <div class="grid grid-cols-4">
                    <router-link :to="element.path" v-for="(element, i) in links" :key="i">
                        {{ element.label }}
                    </router-link>     
                </div>

                <div class="flex gap-5 items-center justify-end">
                    <Image
                        src="/public/svg/search.svg"
                        alt="Search icon"
                    />

                    <Image
                        src="/public/svg/profile.svg"
                        alt="Profile icon"
                    />
                    
                    <div class="flex items-center gap-1">
                        <Image
                            src="/public/svg/cart.svg"
                            alt="Cart icon"
                        />

                        <div class="flex items-center justify-center bg-black rounded-full w-5 h-5 text-white text-sm">
                            2
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </header>
</template>
<script lang="ts" setup>
    import { ref } from 'vue';

    import Container from '@/components/ui/container.vue';
    import Image from '@/components/ui/image.vue';

    const links = ref([
        { path: '/', label: 'Home' },
        { path: '/shop', label: 'Shop' },
        { path: '/product', label: 'Product' },
        { path: '/pages', label: 'Pages' },
    ]);
</script>
