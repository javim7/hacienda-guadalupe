import os
import subprocess

input_dir = "."
output_dir = "../videos2"
os.makedirs(output_dir, exist_ok=True)

extensions = {".mp4", ".MP4", ".mov", ".MOV", ".mkv", ".avi"}

for filename in sorted(os.listdir(input_dir)):
    if os.path.splitext(filename)[1] in extensions:
        input_path = os.path.join(input_dir, filename)
        output_path = os.path.join(output_dir, filename)
        print(f"Processing: {filename}")
        subprocess.run(
            ["ffmpeg", "-i", input_path, "-c", "copy", "-movflags", "+faststart", output_path],
            check=True,
        )
        print(f"  -> Done: {output_path}")

print("\nAll videos processed!")
