<template>
    <section id="articles" aria-labelledby="articles-heading" class="w-full py-4 lg:py-8">
        <Container>
            <Typography tag="h2" bold="bold" class="text-2xl mb-4">
                Articles
            </Typography> 

            <div class="grid lg:grid-cols-3 gap-4 lg:gap-8 place-items-center items-center">
                <router-link :to="element.path" v-for="(element, i) in articles" :key="i">
                    <Image
                        :src="element.image"
                        :alt="element.label"
                    />

                    <Typography tag="p" bold="bold" class="texpath">
                        {{ element.label }}
                    </Typography>

                    <Typography tag="p" bold="bold" class="text-base underline">
                        {{ element.link }}
                    </Typography>
                </router-link>
            </div>
        </Container>
    </section>
</template>
<script setup lang="ts">
    import { ref } from 'vue';

    import Container from '@/components/ui/container.vue';
    import Image from '@/components/ui/image.vue';
    import Typography from '@/components/ui/typography.vue';

    const articles = ref([
        { path: '/', image: '/img/minimal-design.jpg', label: 'Minimal design is taking over', link: 'Read more' },
        { path: '/', image: '/img/decor-room.jpg', label: '5 ways to decorate your home', link: 'Read more' },
        { path: '/', image: '/img/plants.jpg', label: 'Plants and their home benefits', link: 'Read more' },
    ]);
</script>