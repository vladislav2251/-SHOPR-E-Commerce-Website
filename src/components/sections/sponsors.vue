<template>
    <section class="w-full py-4 lg:py-8">
        <Container>

            <hr/>

            <div class="grid grid-cols-2 lg:grid-cols-6 place-items-center items-center">
                <Image
                    :src="element.path"
                    :alt="element.label"
                    v-for="(element, i) in sponsors"
                    :key="i"
                />
            </div>

            <hr/>

        </Container>
    </section>
</template>
<script setup lang="ts">
    import { ref } from 'vue';

    import Container from '@/components/ui/container.vue';
    import Image from '@/components/ui/image.vue';

    const sponsors = ref([
        { path: '/svg/nike.svg', label: 'Nike Logo' },
        { path: '/svg/hush.svg', label: 'Hush Logo' },
        { path: '/svg/puma.svg', label: 'Puma Logo' },
        { path: '/svg/shoei.svg', label: 'Shoei Logo' },
        { path: '/svg/mare.svg', label: 'Mare Logo' },
        { path: '/svg/supreme.svg', label: 'Supreme Logo' },
    ]);
</script>