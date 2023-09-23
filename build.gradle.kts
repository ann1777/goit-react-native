plugins {
    id("com.google.gms.google-services") version "4.3.15" apply(plugin = "com.google.gms.google-services")
}

dependencies {
    // Firebase Authentication
    implementation "com.google.firebase:firebase-auth:21.0.1"

    // Firebase Realtime Database
    implementation "com.google.firebase:firebase-database:21.0.1"

}
