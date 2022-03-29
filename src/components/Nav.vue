<template>
    <div bg-black bg-opacity-50 h-full class="w-1/5">
        <router-link to="/" ml-10 w-full class="h-1/11">
            <div my-5 i-ic:baseline-music-note text-2xl></div>
            <div my-5 text-2xl>云音乐</div>
        </router-link>
        <div w-full text-white class="h-10/11">
            <div mt-8 w-full>
                <div text-sm w-full pl-10>在线音乐</div>
                <ul w-full>
                    <li ml-5 pl-5 mt-3 hover:bg-white-600 hover:bg-opacity-50 rounded class="w-4/5">
                        <div i-ic:baseline-stars text-lg></div>
                        <p>推荐</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>