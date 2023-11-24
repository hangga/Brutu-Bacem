<p align="center">
  <img src="https://github.com/hangga/Brutu-Bacem/blob/main/brutu-bacem-high-resolution-logo-transparent.png?raw=true" width="200px"/>
</p>

Brutu Bacem is a GUI tool to brute force web login pages for testing purposes.

## Philosophy  

The author uses this term because he likes Brutu Bacem, which is a Javanese term that refers to a traditional dish from Central Java, Indonesia. "Brutu" refers to chicken buttocks cooked with typical Javanese spices, while "bacem" refers to a cooking method that involves simmering chicken buttocks for a long time in rich spices.

Brutu bacem is made from chicken butt cooked with spices consisting of grated coconut, lemongrass, lime leaves, galangal, brown sugar, salt and other spices which give it a distinctive and fragrant taste. The long cooking process makes the chicken butt tender and the spices absorb well.

This dish is usually served as a side dish with white rice. Brutu bacem is an example of a dish that reflects the traditional richness of Indonesian culinary delights, especially from the Java region.

## Screnshot

<p align="center">
   <img width="700px" src="https://github.com/hangga/Brutu-Bacem/blob/main/brutu-baem-web-blur.png?raw=true"/>
</p>

## How this Work

```
┌───────────────────────────────┐     ┌───────────────────────┐     ┌────────────────────┐
│                               │     │                       │     │                    │
│   startBruteForce Function    │     │   getRandomUserAgent  │     │   authenticate     │
│                               │     │                       │     │                    │
└───────────────┬───────────────┘     └───────────────────────┘     └────────────────────┘
                │                               │                               │
                │                               │                               │
                │                               │                               │
                │                               │                               │
                ▼                               ▼                               ▼
       ┌──────────────────┐          ┌────────────────────┐          ┌────────────────────┐
       │                  │          │                    │          │                    │
       │   Loop through   │          │   Select random    │          │   Send HTTP POST   │
       │   User List      │          │   User-Agent from  │          │   Request to the   │
       │                  │          │   User-Agents List │          │   specified URL    │
       └──────────────────┘          └────────────────────┘          └────────────────────┘
                │                               │                               │
                │                               │                               │
                │                               │                               │
                │                               │                               │
                ▼                               ▼                               │
       ┌──────────────────┐          ┌────────────────────┐                     │
       │                  │          │                    │                     │
       │ Loop through     │          │   Return random    │                     │
       │ Password List    │          │   User-Agent       │                     │
       │                  │          └────────────────────┘                     │
       └──────────────────┘                              │                      │
                │                                        │                      │
                │                                        │                      │
                │                                        │                      │
                │                                        ▼                      │
                │                               ┌────────────────────┐          │
                │                               │                    │          │
                └──────────────────────────────▶   Update UI with   │          │
                                                │   Authentication   │          │
                                                │   Results          │          │
                                                └────────────────────┘          │
                                                         │                      │
                                                         │                      │
                                                         │                      │
                                                         ▼                      │
                                                ┌────────────────────┐          │
                                                │                    │          │
                                                │   Check Stop Flag  │◀────────┤
                                                │   and Delay        │          │
                                                └────────────────────┘          │
                                                         │                      │
                                                         │                      │
                                                         │                      │
                                                         ▼                      │
                                                ┌────────────────────┐          │
                                                │                    │          │
                                                │   Continue Loop    │◀────────┤
                                                │   or Break if Stop │          │
                                                └────────────────────┘          │
                                                         │                      │
                                                         └──────────────────────┘

```

## How to Use
1. Searching for targets. You can use Google Dork. <a target="_blank" href="https://www.google.com/search?q=inurl%3A+%22admin%22+%22co.il%22">Example</a>.
2. Inspect the element to find the input selector.
 
    **Example of using selectors in HTML:**
  
    ```
    <!-- HTML example for login form -->
    <form>
        <input type="text" name="username" id="usernameInput" />
        <input type="password" name="password" id="passwordInput" />
        <button type="submit">Login</button>
    </form>
    ```
    In this case, usersel might be `#usernameInput` and passsel might be `#passwordInput`. This tells the program that the **username** input element is identified with the ID `usernameInput` and the **password** input element is identified with the ID `passwordInput`. You need to adjust the selector according to the HTML structure of the actual login page you want to attack.

3. Use the wordlist that you have. You can search on <a href="https://github.com/topics/password-list?o=desc&s=updated"> Github</a>.
4. Determine delay and Start.
5. Don't forget to use a proxy.

## Demo
- <a target="_blank" href="https://hangga.github.io/Brutu-Bacem/">https://hangga.github.io/Brutu-Bacem/</a>

## Disclaimer
This tool is intended for educational purposes and penetration testing only. Unauthorized use for malicious purposes is strictly prohibited.
