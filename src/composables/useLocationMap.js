import { ref } from 'vue'


export default function useLocationMao() {


    const zoom = ref(15)
    const center = ref([18.46422, -97.39735])

    function pin(e) {
        const marker = e.target.getLatLng()
        center.value = [marker.lat, marker.lng]
    }


    return {
        zoom,
        center,
        pin
    }
}