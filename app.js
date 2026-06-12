(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    key: "SECRET API KEY",
    v: "weekly"
  });

const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");

 const mapElement = document.querySelector('gmp-map');

async function init() {
    // Request needed libraries.
    const [{ AdvancedMarkerElement }] = await Promise.all([
        google.maps.importLibrary('marker'),
        google.maps.importLibrary('maps'),
    ]);

    const marker = new AdvancedMarkerElement({
        position: { lat: 47.323188106948514, lng: 5.044016235526838 },
    });
    mapElement.append(marker);
}

myMap = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 47.323188106948514, lng: 5.044016235526838 },
    zoom: 15,
});

const marker = new AdvancedMarkerElement({
    map: myMap,
    position: { lat: 47.323188106948514, lng: 5.044016235526838 },
});

async function getPlaceDetails() {
    const { Place } = await google.maps.importLibrary("places");
    const { MapsNetworkError, MapsRequestError, MapsServerError } = await google.maps.importLibrary("core");

    // Use place ID to create a new Place instance.
    const place = new Place({
        id: 'ChIJN5Nz71W3j4ARhx5bwpTQEGg****', // Pass a bad Place ID to trigger an error.
    });

    // Error handling for fetchFields.
    try {
        // Call fetchFields, passing the desired data fields.
        await place.fetchFields({ fields: ['displayName', 'formattedAddress', 'location'] });
    } catch (error) {
        if (error && error instanceof google.maps.MapsRequestError) {
            // HTTP 4xx request error.
            console.error('fetchFields failed: MapsRequestError - check the request parameters', error);
        } else if (error && error instanceof google.maps.MapsServerError) {
            // HTTP 5xx server-side error.
            console.error('fetchFields failed: MapsServerError', error);
        } else if (error && error instanceof google.maps.MapsNetworkError) {
            // Network error.
            console.error('fetchFields failed: MapsNetworkError', error);
        }  else {
            console.error('fetchFields failed: An unknown error occurred', error);
        }
    }
}