/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FIREBASE_API_KEY?: string;
  readonly VITE_FIREBASE_AUTH_DOMAIN?: string;
  readonly VITE_FIREBASE_PROJECT_ID?: string;
  readonly VITE_FIREBASE_STORAGE_BUCKET?: string;
  readonly VITE_FIREBASE_MESSAGING_SENDER_ID?: string;
  readonly VITE_FIREBASE_APP_ID?: string;
  readonly VITE_GROQ_API_KEY?: string;
  readonly VITE_OPENWEATHER_API_KEY?: string;
  readonly [key: string]: any;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module 'firebase/app' {
  export interface FirebaseApp {
    [key: string]: any;
  }
  export interface FirebaseOptions {
    apiKey?: string;
    authDomain?: string;
    projectId?: string;
    storageBucket?: string;
    messagingSenderId?: string;
    appId?: string;
    measurementId?: string;
    [key: string]: any;
  }
  export function initializeApp(options: FirebaseOptions, name?: string): FirebaseApp;
  export function getApps(): FirebaseApp[];
  export function getApp(name?: string): FirebaseApp;
}

declare module 'firebase/auth' {
  export interface User {
    uid: string;
    email?: string | null;
    displayName?: string | null;
    phoneNumber?: string | null;
    photoURL?: string | null;
    [key: string]: any;
  }
  export type FirebaseUser = User;
  export interface UserCredential {
    user: User;
    [key: string]: any;
  }
  export interface ConfirmationResult {
    confirm(verificationCode: string): Promise<UserCredential>;
    verificationId: string;
    [key: string]: any;
  }
  export interface Auth {
    [key: string]: any;
  }
  export function getAuth(app?: any): Auth;
  export function signInWithEmailAndPassword(auth: any, email: string, password: string): Promise<UserCredential>;
  export function createUserWithEmailAndPassword(auth: any, email: string, password: string): Promise<UserCredential>;
  export function sendPasswordResetEmail(auth: any, email: string): Promise<void>;
  export function signOut(auth: any): Promise<void>;
  export function onAuthStateChanged(auth: any, nextOrObserver: (user: User | null) => void, error?: (error: any) => void, completed?: () => void): () => void;
  export class RecaptchaVerifier {
    constructor(auth: any, containerOrId: any, parameters?: any);
    clear(): void;
    render(): Promise<number>;
    verify(): Promise<string>;
  }
  export function signInWithPhoneNumber(auth: any, phoneNumber: string, appVerifier: any): Promise<ConfirmationResult>;
  export class GoogleAuthProvider {
    constructor();
  }
}

declare module 'firebase/firestore' {
  export interface Firestore {
    [key: string]: any;
  }
  export interface DocumentData {
    [field: string]: any;
  }
  export interface QuerySnapshot<T = DocumentData> {
    forEach(callback: (result: QueryDocumentSnapshot<T>) => void): void;
    docs: QueryDocumentSnapshot<T>[];
    empty: boolean;
    size: number;
    [key: string]: any;
  }
  export interface QueryDocumentSnapshot<T = DocumentData> {
    id: string;
    exists(): boolean;
    data(): T;
    [key: string]: any;
  }
  export interface DocumentSnapshot<T = DocumentData> {
    id: string;
    exists(): boolean;
    data(): T | undefined;
    [key: string]: any;
  }
  export function getFirestore(app?: any): Firestore;
  export function collection(firestore: any, path: string, ...pathSegments: string[]): any;
  export function doc(firestoreOrCollection: any, path?: string, ...pathSegments: string[]): any;
  export function getDoc(reference: any): Promise<DocumentSnapshot>;
  export function setDoc(reference: any, data: any, options?: any): Promise<void>;
  export function updateDoc(reference: any, data: any): Promise<void>;
  export function getDocs(query: any): Promise<QuerySnapshot>;
  export function addDoc(reference: any, data: any): Promise<any>;
  export function query(query: any, ...queryConstraints: any[]): any;
  export function where(fieldPath: string, opStr: any, value: any): any;
  export function orderBy(fieldPath: string, directionStr?: string): any;
  export function onSnapshot(referenceOrQuery: any, onNext: (snapshot: any) => void, onError?: (error: any) => void): () => void;
  export function serverTimestamp(): any;
}
