
# Video Captioning App

This is a simple React-based web app that allows users to load a video, add captions with time stamps, and display those captions on the video. The app also provides features to export and import caption data as JSON files. Additionally, users can edit or delete individual captions.

## Features

- **Video Loading**: Enter a URL to load a video and display it on the page.
- **Caption Management**: Add, edit, and delete captions with time stamps.
- **Export Data**: Export captions and video data as a JSON file.
- **Import Data**: Import captions and video data from a JSON file.
- **Responsive UI**: The video player adjusts its size to the video content, ensuring it doesn’t go out of the frame.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sumeetbidhan/video-captioning-app.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd video-captioning-app
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the app**:
   ```bash
   npm start
   ```

   This will start the development server, and you can view the app in your browser at `http://localhost:3000`.

## How to Use

1. **Add a Video**:
   - Enter a video URL in the input field and click "Load Video".
   - The video will be displayed, and you can play/pause it.

2. **Add Captions**:
   - Enter the caption text and provide start and end times (in seconds).
   - Click "Add Caption" to add the caption to the list.
   - The captions will appear on the video at the appropriate times.

3. **Edit Captions**:
   - Click "Edit" on any caption to modify its text and time range.
   - Save the changes to update the caption.

4. **Delete Captions**:
   - Click "Delete" on any caption to remove it from the list.

5. **Export Data**:
   - Click "Export Data" to download the captions and video data as a JSON file.

6. **Import Data**:
   - Click "Import Data" to upload a previously saved JSON file containing video and caption data.

## Demo Video

You can test the app with this sample video URL:

- [Test Video](https://www.w3schools.com/html/mov_bbb.mp4)

## Technologies Used

- **React**: Frontend JavaScript library for building the UI.
- **Tailwind CSS**: Utility-first CSS framework for styling the UI.
- **HTML5 Video API**: Used for loading and controlling video playback.

## Contributing

If you want to contribute to this project, feel free to fork the repository and submit a pull request. Contributions are always welcome!

## License

This project is open source and available under the [MIT License](LICENSE).
