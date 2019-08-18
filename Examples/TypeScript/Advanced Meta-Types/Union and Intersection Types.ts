// Type unions are a way of declaring that an object
// could be more than one type.

type StringOrNumber = string | number
type ProcessStates = "open" | "closed"
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9
type AMessyUnion = "hello" | 156 | { error: true }

// If the use of "open" and "closed" vs string is 
// new to you, check out: example:literals

// We can mix different types into a union, and 
// what we're saying is that the value is one of those types.

// TypeScript will then leave you to figure out how to 
// determine which value it could be at runtime.

// Unions can sometimes be undermined by type widening,
// for example:

type WindowStates = "open" | "closed" | "minimized" | string

// If you hover above, you can see that WindowStates
// becomes a string - not the union. This is covered in
// examples:type-widening-narrowing

// If a union is an OR, then an intersection is an AND.
// Intersection types are when two types intersect to create
// a new type. This allows for type composition.

interface ErrorHandling {
  success: boolean
  error?: { message: string }
}

interface ArtworksData {
  artworks: [{ title: string }]
}

interface ArtistsData {
  artists: [{ name: string }]
}

// These interfaces can be composed in responses which have 
// both consistent error handling, and their own data.

type ArtworksResponse = ArtworksData & ErrorHandling
type ArtistsResponse = ArtistsData & ErrorHandling

// For example:

const handleArtistsResponse = (response: ArtistsResponse) => {
  if (response.error) {
    console.error(response.error.message)
    return
  }
  
  console.log(response.artists)
}
