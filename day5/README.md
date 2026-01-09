 Day 5 – Disk Management & Mounts

 What I Learned

 1. Disk and Partition Inspection
- Understood the concept of block devices in Linux
- Used commands like:
  - `lsblk` to view disks and partitions
  - `df -h` to check mounted filesystems and usage
  - `du -sh` to analyze directory disk usage
- Learned why permission errors appear when inspecting system directories as a non-root user

 2. Mounting and Unmounting Filesystems
- Learned how Linux mounts storage to directories
- Understood temporary vs permanent mounts
- Used:
  - `mount` to attach a filesystem
  - `umount` to safely detach a filesystem
- Understood why mounting over an existing directory can hide data

 3. Understanding `/etc/fstab`
- Learned the purpose of `/etc/fstab` in permanent mounts
- Understood why `/etc/fstab` is powerful but dangerous
- Learned best practices:
  - Use UUID instead of device names
  - Always test with `mount -a`
  - Use `nofail` for non-critical disks
- Understood why `/etc/fstab` is unconfigured in WSL environments

 Key Takeaway

Storage misconfiguration is one of the fastest ways to bring down a Linux system.  
A single mistake in mounts or `/etc/fstab` can cause boot failure or data inaccessibility, which makes disk management a critical DevOps skill.

