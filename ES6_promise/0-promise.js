export default function getResponseFromAPI() {
    const firstPromise = new Promise((resolve, reject) => {
        const success = true;
    if (success) {
        resolve("Stuff worked!");
    }
    else {
        reject(Error("It broke"));
    }
    });
    return firstPromise;
}