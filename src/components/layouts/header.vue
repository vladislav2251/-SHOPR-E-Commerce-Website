<template>
    <header aria-label="primary" class="w-full fixed top-0 z-50">
        <div class="bg-[#ffffff] py-3 -z-50">
            <Container>
                <div class="grid grid-cols-2 lg:grid-cols-3 items-center">
                    <a href="/" title="Navigate home">
                        <Image
                            src="/svg/logo.svg"
                            alt="SHOPR logo icon"
                        />
                    </a>

                    <nav data-astro-prefetch aria-label="Primary"  class="hidden place-items-center lg:grid lg:grid-cols-4">
                        <a
                                :href="element.path" 
                                :key="i" 
                                v-for="(element, i) in links" 
                                class="relative flex h-full items-center"> 
                                
                                {{ element.label }} 
                        </a>
                    </nav> 

                    <div class="lg:flex hidden gap-5 items-center justify-end">
                        <Image
                            src="/svg/search.svg"
                            alt="Search icon"
                        />

                        <Image
                            src="/svg/profile.svg"
                            alt="Profile icon"
                        />
                        
                        <div class="flex items-center gap-1">
                            <Image
                                src="/svg/cart.svg"
                                alt="Cart icon"
                            />

                            <div class="flex items-center justify-center bg-black rounded-full min-w-5 h-5 text-white text-sm">
                                2
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-end lg:hidden">
                        <MobileNavigationToggle 
                                @click:toggle="toggleMobileMenu" 
                                :is-background-shown="isBackgroundShown.value"
                        />
                    </div>
                </div>
            </Container>
        </div>
        <MobileNavigation :is-open="isMobileMenuOpen" :links="links" @close="closeMobileMenu"/>
    </header>
</template>
<script lang="ts" setup>
    import { ref, watch, computed } from 'vue';

    import Container from '@/components/ui/container.vue';
    import Image from '@/components/ui/image.vue';

    import MobileNavigation from '@/components/layouts/mobile_navigation.vue';
    import MobileNavigationToggle from '@/components/layouts/components/mobile_navigation_toggle.vue';
    import useLockBody from '@/hooks/use-body-lock';
    import useScrollThreshold from '@/hooks/use-scroll-treshold';

    const links = ref([
        { path: '/', label: 'Home' },
        { path: '/shop', label: 'Shop' },
        { path: '/product', label: 'Product' },
        { path: '/pages', label: 'Pages' },
    ]);

    const isMobileMenuOpen = ref(false);
    const GRACE_THRESHOLD = ref<any>(12);

    const { isScrollThresholdPassed } = useScrollThreshold(GRACE_THRESHOLD.value);

    const isBackgroundShown = computed(() => isScrollThresholdPassed || isMobileMenuOpen.value);

    const toggleMobileMenu = () => {
            isMobileMenuOpen.value = !isMobileMenuOpen.value;
            isScrollThresholdPassed.value = !isScrollThresholdPassed.value;

            if (window.scrollY > 10)
                    isScrollThresholdPassed.value = true;
    };

    const closeMobileMenu = () => {
            isMobileMenuOpen.value = false;
    };

    watch(() => isMobileMenuOpen.value, (newValue) => {
            useLockBody(newValue);
    });
</script>
