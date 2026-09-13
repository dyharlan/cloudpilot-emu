/*
 * Determine RAM size in MB from memory size. This exploits the fact that RAM
 * size is always a power-of-two multiple of 1MB, and memory size is only a
 * a few (64) kilobtes of extra memory.
 */
export function uarmRamSizeFromMemorySize(memorySize: number): number {
    return memorySize > 0 ? 1 << (31 - Math.clz32(memorySize)) : 0;
}
