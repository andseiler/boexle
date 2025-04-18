<template>
  <div class="pb-12 border-b-2 border-primary-500 mb-12"><h2 class="text-center text-primary-500 text-2xl font-bold mb-8">{{ $t('Was unsere Kunden sagen') }}</h2>

    <!-- Create a relative container with padding for the arrows -->
    <div class="relative px-12 md:px-14 lg:px-16">
      <!-- Swiper component -->
      <swiper
          :slides-per-view="3"
          :space-between="30"
          :pagination="{
            clickable: true,
            el: '.swiper-pagination-container'
          }"
          :modules="[Pagination, Autoplay, Navigation]"
          :grab-cursor="true"
          :keyboard="{ enabled: true }"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }"
          :breakpoints="{
            '320': {
              slidesPerView: 1,
              spaceBetween: 20
            },
            '640': {
              slidesPerView: 2,
              spaceBetween: 20
            },
            '768': {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }"
          class="w-full touch-pan-y select-none"
      >
        <swiper-slide>
          <div class=" min-h-90 bg-primarycontrast-500 text-textbright rounded-lg p-6 text-center relative cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="relative">
              <div class="text-textbright mb-6">
                <svg class="w-10 h-10 mx-auto mb-2 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z"/>
                </svg>
                <p class="text-textbright italic">
                  Dude, your ledge is so sick. I just landed my first FS Nodeslide ever!! Totally hyped
                </p>
              </div>
              <div class="flex items-center justify-center flex-col">
                <div class="w-16 h-16 rounded-full overflow-hidden bg-tertiary-200 mb-2 flex items-center justify-center">
                  <svg class="w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <p class="font-bold text-primary-500">Luki </p>
                <p class="text-sm text-textsemibright">Innsbruck</p>
                <TestiInstaLink link="https://instagram.com/lksrggnthlr" />
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="min-h-90 bg-primarycontrast-500 text-textbright rounded-lg p-6 text-center relative cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="relative">
              <div class="text-textbright mb-6">
                <svg class="w-10 h-10 mx-auto mb-2 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z"/>
                </svg>
                <p class="text-textbright italic">
                  That is awesome! I dont have a truck, so space-saving collapsible obstacles I can fit in a regular car trunk are desperately needed.
                </p>
              </div>
              <div class="flex items-center justify-center flex-col">
                <div class="w-16 h-16 rounded-full overflow-hidden bg-tertiary-200 mb-2 flex items-center justify-center">
                  <svg class="w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <p class="font-bold text-primary-500">Mayl3</p>
                <p class="text-sm text-textsemibright">---</p>
                <TestiRedditLink link="https://www.reddit.com/r/skateboarding/comments/1k0fxu6/comment/mnepb8r/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button" />
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="min-h-90 bg-primarycontrast-500 text-textbright rounded-lg p-6 text-center relative cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="relative">
              <div class="text-textbright mb-6">
                <svg class="w-10 h-10 mx-auto mb-2 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z"/>
                </svg>
                <p class="text-textbright italic">
                  That is so fucking cool. I ride around with a 6 foot flat bar in the back of my Subaru. I would absolutely love this portable ledge!
                </p>
              </div>
              <div class="flex items-center justify-center flex-col">
                <div class="w-16 h-16 rounded-full overflow-hidden bg-tertiary-200 mb-2 flex items-center justify-center">
                  <svg class="w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <p class="font-bold text-primary-500">
                  Muted_Effective_2266
                </p>
                <p class="text-sm text-textsemibright">---</p>
                <TestiRedditLink link="https://www.reddit.com/r/skateboarding/comments/1k0fxu6/comment/mnf56le/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button" />
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="min-h-90 bg-primarycontrast-500 text-textbright rounded-lg p-6 text-center relative cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="relative">
              <div class="text-textbright mb-6">
                <svg class="w-10 h-10 mx-auto mb-2 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z"/>
                </svg>
                <p class="text-textbright italic">
                  OMG…I need that ledge!!!!! I’ll buy one!
                </p>
              </div>
              <div class="flex items-center justify-center flex-col">
                <div class="w-16 h-16 rounded-full overflow-hidden bg-tertiary-200 mb-2 flex items-center justify-center">
                  <svg class="w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <p class="font-bold text-primary-500">_dn98_ </p>
                <p class="text-sm text-textsemibright">Saarland</p>
                <TestiInstaLink link="https://instagram.com/_dn98_" />
                <TestiRedditLink link="https://www.reddit.com/r/skateboarding/comments/1k0fxu6/comment/mneko7q/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button" />
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="min-h-90 bg-primarycontrast-500 text-textbright rounded-lg p-6 text-center relative cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="relative">
              <div class="text-textbright mb-6">
                <svg class="w-10 h-10 mx-auto mb-2 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z"/>
                </svg>
                <p class="text-textbright italic">
                  That thing is sick! I would love to have something like that
                </p>
              </div>
              <div class="flex items-center justify-center flex-col">
                <div class="w-16 h-16 rounded-full overflow-hidden bg-tertiary-200 mb-2 flex items-center justify-center">
                  <svg class="w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <p class="font-bold text-primary-500">drphilthy</p>
                <p class="text-sm text-textsemibright">---</p>
                <TestiRedditLink link="https://www.reddit.com/r/skateboarding/comments/1k0fxu6/comment/mnecglq/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button" />
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="min-h-90 bg-primarycontrast-500 text-textbright rounded-lg p-6 text-center relative cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="relative">
              <div class="text-textbright mb-6">
                <svg class="w-10 h-10 mx-auto mb-2 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z"/>
                </svg>
                <p class="text-textbright italic">
                  Very nice work. I bought the Keen Transformer but I think I'd rather have your box!
                </p>
              </div>
              <div class="flex items-center justify-center flex-col">
                <div class="w-16 h-16 rounded-full overflow-hidden bg-tertiary-200 mb-2 flex items-center justify-center">
                  <svg class="w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <p class="font-bold text-primary-500">meltmyface</p>
                <p class="text-sm text-textsemibright">---</p>
                <TestiRedditLink link="https://www.reddit.com/r/skateboarding/comments/1k0fxu6/comment/mned9c5/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button" />
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="min-h-90 bg-primarycontrast-500 text-textbright rounded-lg p-6 text-center relative cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="relative">
              <div class="text-textbright mb-6">
                <svg class="w-10 h-10 mx-auto mb-2 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z"/>
                </svg>
                <p class="text-textbright italic">
                  That ledge is pretty sick 🔥
                </p>
              </div>
              <div class="flex items-center justify-center flex-col">
                <div class="w-16 h-16 rounded-full overflow-hidden bg-tertiary-200 mb-2 flex items-center justify-center">
                  <svg class="w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <p class="font-bold text-primary-500">
                  OddPrint4259
                </p>
                <p class="text-sm text-textsemibright">---</p>
                <TestiRedditLink link="https://www.reddit.com/r/skateboarding/comments/1k0fxu6/comment/mnfvemc/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button" />
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>

      <!-- Navigation arrows positioned absolutely outside the slides -->
      <div
          class="swiper-button-prev !absolute !top-1/2 !transform !-translate-y-1/2 !text-primary-500 !opacity-70 hover:!opacity-100 transition-opacity duration-300 !left-0 z-10"></div>
      <div
          class="swiper-button-next !absolute !top-1/2 !transform !-translate-y-1/2 !text-primary-500 !opacity-70 hover:!opacity-100 transition-opacity duration-300 !right-0 z-10"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/vue";
import TestiInstaLink from "./TestiInstaLink.vue";
import TestiRedditLink from "./TestiRedditLink.vue";
</script>