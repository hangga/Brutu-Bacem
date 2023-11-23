<p align="center">
  <img src="https://github.com/hangga/Brutu-Bacem/blob/main/brutu-bacem-high-resolution-logo-transparent.png?raw=true" width="200px"/>
</p>

Brutu Bacem is a GUI tool to brute force web login pages for testing purposes.

## Screnshot
<p align="center">
<img width="700px" src="https://github.com/hangga/Brutu-Bacem/blob/main/brutu-baem-web-blur.png?raw=true"/>
</p>

## Tips and How to Use
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

## Disclaimer
This tool is intended for educational purposes and penetration testing only. Unauthorized use for malicious purposes is strictly prohibited.
